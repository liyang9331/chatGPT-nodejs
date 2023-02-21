import { Injectable } from '@nestjs/common';
// import { ChatGPTAPI } from 'chatgpt';

@Injectable()
export class ChatgptService {
  async conversation(query): Promise<string> {
    // To use ESM in CommonJS, you can use a dynamic import
    const { ChatGPTAPI } = await import('chatgpt');
    const api = new ChatGPTAPI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const res = await api.sendMessage(query);
    // console.log()
    return res.text;
  }
}
