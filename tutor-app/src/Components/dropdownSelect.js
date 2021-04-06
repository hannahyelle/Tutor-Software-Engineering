import React from 'react'
import Select from 'react-select'

const optionsS = [
  { value: 'math', label: 'Math' },
  { value: 'science', label: 'Science' },
  { value: 'history', label: 'History' }
]

const optionsT = [
    { value: 'Mo9', label: 'Monday 9:00am - 10:00am' },
    { value: 'Mo10', label: 'Monday 10:00am - 11:00am' },
    { value: 'Mo11', label: 'Monday 11:00am - 12:00pm' },
    { value: 'Mo12', label: 'Monday 12:00pm - 1:00pm' },
    { value: 'Mo1', label: 'Monday 1:00pm - 2:00pm' },
    { value: 'Mo2', label: 'Monday 2:00pm - 3:00pm' },
    { value: 'Mo3', label: 'Monday 3:00pm - 4:00pm' },
    { value: 'Mo4', label: 'Monday 4:00pm - 5:00pm' },

    { value: 'Tu9', label: 'Tuesday 9:00am - 10:00am' },
    { value: 'Tu10', label: 'Tuesday 10:00am - 11:00am' },
    { value: 'Tu11', label: 'Tuesday 11:00am - 12:00pm' },
    { value: 'Tu12', label: 'Tuesday 12:00pm - 1:00pm' },
    { value: 'Tu1', label: 'Tuesday 1:00pm - 2:00pm' },
    { value: 'Tu2', label: 'Tuesday 2:00pm - 3:00pm' },
    { value: 'Tu3', label: 'Tuesday 3:00pm - 4:00pm' },
    { value: 'Tu4', label: 'Tuesday 4:00pm - 5:00pm' },

    { value: 'We9', label: 'Wednesday 9:00am - 10:00am' },
    { value: 'We10', label: 'Wednesday 10:00am - 11:00am' },
    { value: 'We11', label: 'Wednesday 11:00am - 12:00pm' },
    { value: 'We12', label: 'Wednesday 12:00pm - 1:00pm' },
    { value: 'We1', label: 'Wednesday 1:00pm - 2:00pm' },
    { value: 'We2', label: 'Wednesday 2:00pm - 3:00pm' },
    { value: 'We3', label: 'Wednesday 3:00pm - 4:00pm' },
    { value: 'We4', label: 'Wednesday 4:00pm - 5:00pm' },

    { value: 'Th9', label: 'Thursday 9:00am - 10:00am' },
    { value: 'Th10', label: 'Thursday 10:00am - 11:00am' },
    { value: 'Th11', label: 'Thursday 11:00am - 12:00pm' },
    { value: 'Th12', label: 'Thursday 12:00pm - 1:00pm' },
    { value: 'Th1', label: 'Thursday 1:00pm - 2:00pm' },
    { value: 'Th2', label: 'Thursday 2:00pm - 3:00pm' },
    { value: 'Th3', label: 'Thursday 3:00pm - 4:00pm' },
    { value: 'Th4', label: 'Thursday 4:00pm - 5:00pm' },

    { value: 'Fr9', label: 'Friday 9:00am - 10:00am' },
    { value: 'Fr10', label: 'Friday 10:00am - 11:00am' },
    { value: 'Fr11', label: 'Friday 11:00am - 12:00pm' },
    { value: 'Fr12', label: 'Friday 12:00pm - 1:00pm' },
    { value: 'Fr1', label: 'Friday 1:00pm - 2:00pm' },
    { value: 'Fr2', label: 'Friday 2:00pm - 3:00pm' },
    { value: 'Fr3', label: 'Friday 3:00pm - 4:00pm' },
    { value: 'Fr4', label: 'Friday 4:00pm - 5:00pm' },
    
  ]

const SubjectSelect = () => (
  <Select isMulti options={optionsS} />
)

const TimeSelect = () => (
    <Select isMulti options={optionsT} />
  )

export{ SubjectSelect, TimeSelect }