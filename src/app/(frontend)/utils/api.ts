export const submitContactForm = async (formData: {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/contact-us`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    return await response.json()
  } catch (error) {
    console.error('Error submitting contact form:', error)
    throw error
  }
}
