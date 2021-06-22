import { createParamDecorator, ExecutionContext, BadRequestException } from '@nestjs/common'
import { Request } from 'express'

type ReqType = 'body' | 'params' | 'query'

export const NotEmpty = createParamDecorator(
  (data: ReqType, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest<Request>()

    if (Object.keys(request[data]).length < 1) throw new BadRequestException(`${data} must not be empty.`)

    return request[data]
  }
)
