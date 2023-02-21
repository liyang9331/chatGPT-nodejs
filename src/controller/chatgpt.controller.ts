import { Controller, Get, Req, Post } from '@nestjs/common';
import { ChatgptService } from 'src/service/chatgpt.service';

@Controller('/chatgpt')
export class ChatgptController {
  constructor(private readonly chatgptService: ChatgptService) {}

  @Get()
  conversation(@Req() query): Promise<string> {
    return this.chatgptService.conversation(query);
  }
}
