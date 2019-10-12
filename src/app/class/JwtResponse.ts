export class JwtResponse {
  constructor(
    public jwttoken: string,
  ) {}

  accessToken: string;
  type: string;
  username: string;
  authorities: string;
  avatarLink: string;

}
