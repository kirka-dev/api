import { ApiTags } from "@nestjs/swagger";
import { Body, Controller, Post} from "@nestjs/common";
import { AuthService } from "./auth.service";
import { User } from "../users/users.entity";

@ApiTags("Auth")
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post("/login")
  login(@Body() user: User) {
    return this.authService.login(user);
  }

  @Post("/signup")
  signup(@Body() user: User) {
    return this.authService.signup(user);
  }
}
