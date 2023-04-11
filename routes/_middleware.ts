import {
  MiddlewareHandlerContext,
} from '$fresh/server.ts'

export const handler = async (
  req: Request,
  ctx: MiddlewareHandlerContext,
) => {
  const resp = await ctx.next()

  if (resp.status === 404) {
    return new Response(null, {
      status: 303,
      headers: {
        Location: '/',
      },
    })
  } else {
    return resp
  }
}
