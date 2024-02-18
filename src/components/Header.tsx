type HeaderProps = {
  title: string;
  subtitle: string;
};

export const Header = ({ title, subtitle }: HeaderProps) => {
  return (
    <div>
      <div>{title}</div>
      <div>{subtitle}</div>
    </div>
  );
};
