<h1 align="center">Programa Mujer</h1>
<p align="center">A free and open-source healthcare webapp based on Foomedical from the Medplum team.</p>
<p align="center">
  <a href="https://github.com/medplum/foomedical/actions">
    <img src="https://github.com/medplum/foomedical/actions/workflows/build.yml/badge.svg" />
  </a>
  <a href="https://github.com/medplum/foomedical/blob/main/LICENSE.txt">
    <img src="https://img.shields.io/badge/license-Apache-blue.svg" />
  </a>
  <a href="https://sonarcloud.io/project/overview?id=medplum_foomedical">
    <img src="https://sonarcloud.io/api/project_badges/measure?project=medplum_foomedical&metric=alert_status&token=3760929adde88ce7da87782be8d811f8b5cec0f4" />
  </a>
</p>

![Programa Mujer Screenshot](screenshot.png)

### Qué es Programa Mujer?

[Programa Mujer](https://mujer.epa-bienestar.com.ar/) es una iniciativa de EPA Bienestar IA donde adaptamos FooMedical de Medplum (Open Source).

### Características

- Free & Open Source
- Seguro y accesible a través del backend en [EPA Bienestar IA](https://app.epa-bienestar.com.ar)
- Registro y Autenticación de Pacientes
- Registros de Salud
  - Resultados de Laboratorio
  - Medicaciones
  - Vacunas
  - Signos Vitals
- Mensajería entre Usuarios/Pacientes y Profesionales/Médicos
- Planes de Atención
- Calendario de consultas
- Todos los datos representados en [FHIR](https://hl7.org/FHIR/)

Mujer está diseñado para "clonar" y "personaliz" según las necesidades de su negogocio. Registro en [Programa Mujer](https://mujer.epa-bienestar.com.ar/register) para ver la demo en acción

### Cómo empezar

Primero, [fork](https://github.com/drdalessandro/mujer/fork) y clone el repositorio.

A continuación, instale la aplicación en su terminal.

```bash
npm install
```

Luego, ejecute la WebApp

```bash
npm run dev
```

Esta aplicación debería ejecutarse en `http://localhost:3000/`

Log into the app on localhost using the same credentials you created on [foomedical.com](https://foomedical.com/) and you are ready to start customizing.

### Account Setup

By default, your locally running Foo Medical app is pointing to the hosted Medplum service. Foo Medical registers signups to a test project.

To send patients to your own organization you will need to [register a new Project on Medplum](https://docs.medplum.com/tutorials/app/register) and configure your app [register form component](https://docs.medplum.com/storybook/index.html?path=/docs/medplum-registerform--basic) in [src/pages/RegisterPage.tsx](https://github.com/medplum/foomedical/blob/main/src/pages/RegisterPage.tsx#L23-L29) and [src/pages/SignInPage.tsx](https://github.com/medplum/foomedical/blob/221dda547b977205cf185131f592fb937535148a/src/pages/SignInPage.tsx#L22-L26) to point to your own project.

If you are using the Medplum Hosted service, you will also have to contact the medplum team ([support@medplum.com](mailto:support@medplum.com) or [Discord](https://discord.gg/UBAWwvrVeN])) to with the following information to set up your Project for Open Patient Registration:

- Medplum Project Id
- Google Client Id
- Google Client Secret
- Recaptcha Site Key
- Recaptcha Secret Key

Contact us on [Discord Server](https://discord.gg/UBAWwvrVeN) with any questions.

### Data Setup

When you log into Foo Medical a set of sample FHIR records is created on your behalf. The ability to run automations is part of the Medplum platform using a framework called [Bots](https://docs.medplum.com/app/bots). For reference, Bot that created the records in Foo Medical can be found [here](https://github.com/medplum/medplum-demo-bots/blob/main/src/examples/sample-account-setup.ts).

### Compliance

Medplum backend is HIPAA compliant and SOC 2 certified. Getting an account set up requires registering on [medplum.com](https://www.medplum.com/). Feel free to ask us questions in real time on our [Discord Server](https://discord.gg/UBAWwvrVeN).

### About Medplum

[Medplum](https://www.medplum.com/) is an open-source, API-first EHR. Medplum makes it easy to build healthcare apps quickly with less code.

Medplum supports self-hosting, and provides a [hosted service](https://app.medplum.com/). [Foo Medical](https://foomedical.com/) uses the hosted service as a backend.

- Read our [documentation](https://docs.medplum.com/)
- Browse our [react component library](https://docs.medplum.com/storybook/index.html?)
- Join our [Discord](https://discord.gg/UBAWwvrVeN)
# prevencion
# prevencion
# mujer
