import React from 'react'
import Select from 'react-select'

const optionsS = [
  { value: 'math', label: 'Math' },
  { value: 'science', label: 'Science' },
  { value: 'history', label: 'History' }
]

const optionsT = [
    { value: 'Mo', label: 'Monday' },
    { value: 'Tu', label: 'Tuesday' },
    { value: 'We', label: 'Wednesday' }
  ]

const SubjectSelect = () => (
  <Select isMulti options={optionsS} />
)

const TimeSelect = () => (
    <Select isMulti options={optionsT} />
  )

export{ SubjectSelect, TimeSelect }