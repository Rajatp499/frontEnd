
interface ButtonProps {
  content: String;
  className?: string;
  onClick?: () => void;
}

const ButtonScale = ({ content, className }: ButtonProps) => {

  return (
    <div className={`cursor-pointer inline-block rounded-md  px-8 py-3 text-xl font-medium transition hover:scale-110 hover:shadow-xl ${className}`}>
      {content}
    </div>
  )
}

const ButtonFill = ({ content, className, onClick }: ButtonProps) => {

  return (
    <button
      className={`px-6 py-2 rounded-full border-2 border-primary 
    text-Black  cursor-pointer
    transition-all duration-300 
    hover:bg-primary font-semibold hover:text-white ${className}`}
      onClick={onClick}
    >
      {content}</button>

  )
}

const ButtonHover = ({ content, className }: ButtonProps) => {
  return (
    <button className={`px-8 py-4 bg-White text-primary font-bold rounded-lg hover:bg-orange-50 transition-all duration-300 shadow-lg hover:shadow-xl ${className}`}>
      {content}
    </button>
  )
}

export { ButtonScale, ButtonFill, ButtonHover }