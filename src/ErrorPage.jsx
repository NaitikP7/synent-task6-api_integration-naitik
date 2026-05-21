import React from 'react'
import { ShieldAlert } from 'lucide-react';
const ErrorPage = (props) => {
  return (
    <div
  className="
    bg-[rgba(183,183,183,0.03)]
    backdrop-blur-xl
    w-[90%] md:w-[70%] lg:w-[50%]
    min-h-[300px] lg:h-[50%]
    rounded-4xl
    px-6 py-8 lg:px-10 lg:py-10
    absolute
    top-1/2 left-1/2
    -translate-x-1/2 -translate-y-1/2
    flex justify-center items-center flex-col
    text-white
  "
>
  <div className="flex flex-col items-center gap-5 lg:gap-8">

    <ShieldAlert
      className="w-14 h-14 lg:w-[76px] lg:h-[76px]"
    />

    <h2 className="text-lg lg:text-xl font-medium text-center">
      User {props.name} does not exist.
      Please check again.
    </h2>

  </div>
</div>
  )
}

export default ErrorPage