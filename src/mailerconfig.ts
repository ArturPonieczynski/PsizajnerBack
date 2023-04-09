import { HandlebarsAdapter } from "@nestjs-modules/mailer/dist/adapters/handlebars.adapter";

export = {
    transport: `smtp://admin123:admin456@localhost:2500`, // nazwa użytkownika : hasło @ host : port
    defaults: {
        from: 'admin@test.example.com',
    },

    // nie będziemy korzystać z szablonów, ale trzeba podać
    template: {
        dir: './templates/email',
        adapter: new HandlebarsAdapter(),
        options: {
            strict: true,
        },
    }
};
