import { NextPage } from 'next'
import React, { ChangeEvent, FormEvent } from 'react'

const EditProfilePage: NextPage = () => {
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    // ...existing code...
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    try {
      // ...existing code...
    } catch (error: any) {
      console.log("Error updating profile:", error.response?.data);
    }
  }

  return (
    <div>Hello, User!</div>
  )
}

export default EditProfilePage