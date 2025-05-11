import React, { useEffect  } from 'react';
import { Tldraw, useEditor, createShapeId, BaseBoxShapeUtil, TLBaseShape, HTMLContainer } from 'tldraw';
import 'tldraw/tldraw.css'
import parseTreeToSvg from './d3parseTree';
import { ParserRuleContext } from 'antlr4';

export type IDangerousHtmlShape = TLBaseShape<
	'html',
	{
		w: number
		h: number
		html: string
	}
>

// [2]
class DangerousHtmlExample extends BaseBoxShapeUtil<IDangerousHtmlShape> {
	static override type = 'html' as const

	override getDefaultProps() {
		return {
			type: 'html',
			w: 100,
			h: 100,
			html: '<div>Loading...</div>',
		}
	}

	override component(shape: IDangerousHtmlShape) {
		return (
			<HTMLContainer style={{ overflow: 'auto' }}>
				<div dangerouslySetInnerHTML={{ __html: shape.props.html }}></div>
			</HTMLContainer>
		)
	}

	override indicator(shape: IDangerousHtmlShape) {
		return <rect width={shape.props.w} height={shape.props.h} />
	}
}

interface ParseTreeViewerProps {
  parseTree: ParserRuleContext | null;
}

function InnerTldrawElement({ parseTree }: ParseTreeViewerProps) {
  const editor = useEditor()

  useEffect(() => {
    let id = null
		if (parseTree) {
			const { svg, height, width } = parseTreeToSvg(parseTree)
			id = createShapeId()
			editor.updateInstanceState({ isReadonly: false })
			editor.createShape({
				id: id,
				type: 'html',
				x: 0,
				y: 0,
				props: {
					html: svg,
					h: height,
					w: width
				},
			})
			editor.zoomToFit()
			editor.updateInstanceState({ isReadonly: true })
		}
    return () => {
			if (id != null) {
				editor.updateInstanceState({ isReadonly: false })
				editor.deleteShape(id)
				editor.updateInstanceState({ isReadonly: true })
			}
		}
  }, [parseTree, editor])

  return <></>
}

export default function ParseTreeViewer(props: ParseTreeViewerProps) {
	return (
		<div style={{ height: '500px' }}>
			<Tldraw
        inferDarkMode
        options={{ maxPages: 1 }}
        onMount={(editor) => {
          editor.updateInstanceState({ isReadonly: true })
        }}
        shapeUtils={[DangerousHtmlExample]}
      >
        <InnerTldrawElement {...props} />
      </Tldraw>
		</div>
	)
};