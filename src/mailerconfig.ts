import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { configuration } from '../config/config';

export = {
  transport: `smtp://${configuration.userNameSMTP}:${configuration.userPasswordSMTP}@${configuration.hostSMTP}:${configuration.portSMTP}`,
  defaults: {
    from: `${configuration.emailSendFromSMTP}`,
  },

  // nie będziemy korzystać z szablonów, ale trzeba podać
  template: {
    dir: './templates/email',
    adapter: new HandlebarsAdapter(),
    options: {
      strict: true,
    },
  },
};
