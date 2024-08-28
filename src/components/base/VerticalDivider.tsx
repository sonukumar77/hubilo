interface Props {
  VerticalDivider?: string;
}

const VerticalDivider = ({ VerticalDivider }: Props) => {
  return <div className={`w-[1px] h-4 bg-secondary-50 ${VerticalDivider}`} />;
};

export default VerticalDivider;
