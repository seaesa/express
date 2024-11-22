import { memo } from "react";

const Footer: React.FC = (): JSX.Element => {

  return (
    <footer className="flex flex-col">
      <div className="text-sm">
        <span>© Clone From Instagram</span>
      </div>
    </footer>

  )
}

export default memo(Footer)
