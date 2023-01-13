import type * as PDFJS from 'pdfjs-dist'
import { vi } from 'vitest'
import { createEventHook } from '@vueuse/core'
import {
  provide,
  reactive,
  toRefs,
} from 'vue-demi'

export const loadEvent = createEventHook<PDFJS.PDFDocumentProxy>()

export const errorEvent = createEventHook<Error>()

export const context = reactive({
  page          : 1,
  scale         : 1,
  totalPage     : 0,
  loading       : true,
  error         : undefined,
  ready         : false,
  pdfDoc        : undefined,
  pdfEventBus   : undefined,
  pdfViewer     : undefined,
  pdfLoadingTask: undefined,
  pdfLinkService: undefined,
  pdfJS         : undefined,
})

export const zoomIn = vi.fn()

export const zoomOut = vi.fn()

export const openDoc = vi.fn((src: string, password?: string) => {
  if (src) {
    context.loading = true

    setTimeout(() => {
      if (src.includes('error')) {
        context.error = new Error('Doc not loaded')

        errorEvent.trigger(context.error)
      } else if (src.includes('protected') && !password) {
        context.error      = new Error('Doc not loaded')
        context.error.name = 'PasswordException'

        errorEvent.trigger(context.error)
      } else {
        context.ready     = true
        context.totalPage = 5

        loadEvent.trigger({} as unknown as PDFJS.PDFDocumentProxy)
      }

      context.loading = false
    }, 1)
  }
})

export const closeDoc = vi.fn()

export const PDF_VIEWER_CONTEXT = Symbol('PdfViewer')

export function useViewer () {
  const refs = toRefs(context)

  provide(PDF_VIEWER_CONTEXT, {
    page     : refs.page,
    scale    : refs.scale,
    totalPage: refs.totalPage,
    zoomIn   : zoomIn,
    zoomOut  : zoomOut,
  })

  return {
    ...refs,
    zoomIn,
    zoomOut,
    openDoc,
    closeDoc,
    onLoaded: loadEvent.on,
    onError : errorEvent.on,
  }
}
