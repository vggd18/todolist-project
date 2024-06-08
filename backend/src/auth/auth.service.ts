import { Injectable, UnauthorizedException } from '@nestjs/common';
import { MembrosService } from 'src/membros/membros.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private membrosService: MembrosService, private jwtService: JwtService) {}

    async signIn(email: string, password: string): Promise<any> {
        const membro = await this.membrosService.findByEmail(email);
        if (membro?.senha !== password) {
            throw new UnauthorizedException();
        }
        const payload = {sub: membro.id, email: membro.email};
        return {acess_token: await this.jwtService.signAsync(payload)}
    }
}
