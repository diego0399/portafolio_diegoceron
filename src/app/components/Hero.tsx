<section className="flex min-h-screen items-center justify-center px-4 pt-28 pb-12 sm:px-6 lg:px-8">
  <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-10 lg:grid-cols-2">
    
    <div className="flex justify-center lg:justify-end">
      <div className="relative h-52 w-52 overflow-hidden rounded-full sm:h-64 sm:w-64 lg:h-80 lg:w-80">
        <Image
          src="/images/foto.png"
          alt="Foto de Diego Alejandro Ceron"
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>

    <div className="text-center lg:text-left">
      <span className="inline-flex rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700 dark:bg-green-900/40 dark:text-green-300">
        Disponible para nuevas oportunidades
      </span>

      <h1 className="mt-5 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl">
        Diego Alejandro Ceron
      </h1>

      <h2 className="mt-3 text-xl font-semibold text-blue-600 sm:text-2xl">
        Desarrollador Junior Back End
      </h2>

      <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-gray-600 dark:text-gray-300 sm:text-lg lg:mx-0">
        Desarrollador Back End con formación en Ingeniería de Sistemas, enfocado en la creación de sistemas web, APIs, bases de datos y soluciones orientadas a la lógica de negocio.
      </p>

      <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
        <button className="w-full rounded-xl border-2 border-blue-600 px-6 py-3 font-semibold text-blue-600 transition hover:bg-blue-600 hover:text-white sm:w-auto">
          Sobre mí
        </button>

        <a
          href={whatsappUrl}
          target="_blank"
          className="w-full rounded-xl bg-green-600 px-6 py-3 text-center font-semibold text-white transition hover:bg-green-700 sm:w-auto"
        >
          Contactar por WhatsApp
        </a>
      </div>
    </div>
  </div>
</section>
