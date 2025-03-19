export const submitContactForm = async (formData: {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}) => {
  try {
    const response = await fetch(`/api/contact-us`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })

    const data = await response.json()

    if (!response.ok) {
      console.error('Backend error response:', data)
      throw new Error(data.message || `HTTP error! Status: ${response.status}`)
    }

    return data
  } catch (error) {
    console.error('Error submitting contact form:', error)
    throw error
  }
}
