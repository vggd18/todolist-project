import { BasicStrategy as Strategy } from 'passport-http';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class BasicStrategy extends PassportStrategy(Strategy) {
    constructor(
        private readonly configService: ConfigService,
    ) {
        super({
            passReqToCallback: true
        });
    }

    public async validate(req, login: string, senha: string): Promise<boolean> {
        const user = this.configService.get<string>('HTTP_BASIC_USER');
        const pass = this.configService.get<string>('HTTP_BASIC_PASS');

        if (user === login && pass === senha) {
            return true;
        }
        throw new UnauthorizedException();
    }
}
