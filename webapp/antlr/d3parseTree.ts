import * as d3 from 'd3';
import { ParserRuleContext, ParseTree } from 'antlr4';

type TreeHierarchy = {
  name: string,
  children: TreeHierarchy[]
}

const parseTreeToHierarchy = (pt: ParseTree) => {
  let txt = '???'
  const pta = pt as any // eslint-disable-line @typescript-eslint/no-explicit-any
  const parser = pta?.parser ?? pta?.parentCtx?.parser
  if (parser != null) {
    if (pta.ruleIndex != null) {
      txt = parser.ruleNames[pta.ruleIndex]
    } else if (pta.symbol.type != null) {
      txt = parser.symbolicNames[pta.symbol.type]
    }
  }
  const node: TreeHierarchy = {
    name: txt,
    children: []
  }

  if (pt instanceof ParserRuleContext) {
    for (let i = 0; i < pt.getChildCount(); ++i) {
      node.children.push(parseTreeToHierarchy(pt.getChild(i)));
    }
  }

  return node;
}

const parseTreeToSvg = (pt: ParserRuleContext) => {
  const hierarchy = parseTreeToHierarchy(pt)
  const root = d3.hierarchy(hierarchy)

  const height = root.leaves().length * 30
  const width = root.height * 100
  
  const treeLayout = d3.tree().size([height, width])
  treeLayout(root as any) // eslint-disable-line @typescript-eslint/no-explicit-any

  const svg = d3.create('svg')
    .attr('viewBox', `0 0 ${width} ${height}`)
    .attr('xmlns', 'http://www.w3.org/2000/svg');

  svg.selectAll('.link')
    .data(root.links())
    .enter().append('line')
    .attr('class', 'link')
    .attr('x1', (d: any) => d.source.y) // eslint-disable-line @typescript-eslint/no-explicit-any
    .attr('y1', (d: any) => d.source.x) // eslint-disable-line @typescript-eslint/no-explicit-any
    .attr('x2', (d: any) => d.target.y) // eslint-disable-line @typescript-eslint/no-explicit-any
    .attr('y2', (d: any) => d.target.x) // eslint-disable-line @typescript-eslint/no-explicit-any
    .attr('stroke', '#ccc');

  svg.selectAll('.node')
    .data(root.descendants())
    .enter().append('circle')
    .attr('class', 'node')
    .attr('cx', (d: any) => d.y) // eslint-disable-line @typescript-eslint/no-explicit-any
    .attr('cy', (d: any) => d.x) // eslint-disable-line @typescript-eslint/no-explicit-any
    .attr('r', 4)
    .attr('fill', '#ff6347');

  svg.selectAll('.text')
    .data(root.descendants())
    .enter().append('text')
    .attr('class', 'text')
    .attr('x', (d: any) => d.y + 10) // eslint-disable-line @typescript-eslint/no-explicit-any
    .attr('y', (d: any) => d.x) // eslint-disable-line @typescript-eslint/no-explicit-any
    .text((d: any) => d.data.name); // eslint-disable-line @typescript-eslint/no-explicit-any

  return {
    svg: svg.node()?.outerHTML,
    height,
    width
  }
}
export default parseTreeToSvg