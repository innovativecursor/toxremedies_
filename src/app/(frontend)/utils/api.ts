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

export const fetchFeaturedPublications = async () => {
  try {
    const response = await fetch(`/api/backend-featured-publications`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    const data = await response.json()

    if (!response.ok) {
      console.error('Backend error response:', data)
      throw new Error(data.message || `HTTP error! Status: ${response.status}`)
    }

    return data
  } catch (error) {
    console.error('Error fetching publications:', error)
    throw error
  }
}

export const fetchFounderImages = async () => {
  try {
    const response = await fetch(`/api/founder-images`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    const data = await response.json()

    if (!response.ok) {
      console.error('Backend error response:', data)
      throw new Error(data.message || `HTTP error! Status: ${response.status}`)
    }

    return data
  } catch (error) {
    console.error('Error fetching founder images:', error)
    throw error
  }
}

export const fetchServices = async () => {
  try {
    const response = await fetch(`/api/services`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    const data = await response.json()

    if (!response.ok) {
      console.error('Backend error response:', data)
      throw new Error(data.message || `HTTP error! Status: ${response.status}`)
    }

    return data
  } catch (error) {
    console.error('Error fetching services:', error)
    throw error
  }
}

export const fetchFounderTexts = async () => {
  try {
    const response = await fetch(`/api/founder-texts`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    const data = await response.json()

    if (!response.ok) {
      console.error('Backend error response:', data)
      throw new Error(data.message || `HTTP error! Status: ${response.status}`)
    }

    return data
  } catch (error) {
    console.error('Error fetching founder texts:', error)
    throw error
  }
}

export const fetchFAQs = async () => {
  try {
    const response = await fetch(`/api/faqs`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    const data = await response.json()

    if (!response.ok) {
      console.error('Backend error response:', data)
      throw new Error(data.message || `HTTP error! Status: ${response.status}`)
    }

    return data
  } catch (error) {
    console.error('Error fetching FAQs:', error)
    throw error
  }
}
