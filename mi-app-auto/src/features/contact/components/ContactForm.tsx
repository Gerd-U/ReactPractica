import { useForm } from 'react-hook-form'
import { useSearchParams } from 'react-router-dom'
import './ContactForm.css'

type ContactForm = {
  name: string
  email: string
  phone: string
  car: string
  message: string
}

export default function ContactForm() {
  const [searchParams] = useSearchParams()
  const carName = searchParams.get('car') ?? ''
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactForm>({
    defaultValues: {
      car: carName,
    },
  })

  function onSubmit(data: ContactForm) {
    console.log(data)
  }

  return (
    <section className="contact-form">
      <h1>Contacto</h1>
      <p>Complete el formulario y nos pondremos en contacto con usted.</p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="contact-form__field">
          <label htmlFor="name">Nombre completo</label>
          <input
            id="name"
            type="text"
            placeholder="Digite su nombre"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'name-error' : undefined}
            {...register('name', { required: 'El nombre es obligatorio' })}
          />
          {errors.name && (
            <span id="name-error" className="contact-form__error">
              {errors.name.message}
            </span>
          )}
        </div>

        <div className="contact-form__field">
          <label htmlFor="email">Correo electrónico</label>
          <input
            id="email"
            type="email"
            placeholder="correo@ejemplo.com"
            {...register('email')}
          />
        </div>

        <div className="contact-form__field">
          <label htmlFor="phone">Teléfono</label>
          <input
            id="phone"
            type="tel"
            placeholder="8888-8888"
            {...register('phone')}
          />
        </div>

        <div className="contact-form__field">
          <label htmlFor="car">Auto de interés</label>
          <input
            id="car"
            type="text"
            placeholder="Seleccione un auto"
            {...register('car')}
          />
        </div>

        <div className="contact-form__field contact-form__field--wide">
          <label htmlFor="message">Mensaje</label>
          <textarea
            id="message"
            placeholder="Cuéntenos qué desea saber..."
            rows={5}
            {...register('message')}
          />
        </div>

        <button
          className="button btn--primary contact-form__submit"
          type="submit"
        >
          Registrar consulta
        </button>
      </form>

    </section>
  )
}
