import EmptyState from '@/components/emptyStates/EmptyState'
import { Users2 } from 'lucide-react'
import React from 'react'

const UserManagement = () => {
  return (
    <div className='flex items-center justify-center'>
      <EmptyState
        Icon={Users2}
        className={"mt-16"}
        heading={"No users found"}
        description={"All your Doctors and Patients will listed here"}
      />
    </div>
  )
}

export default UserManagement
