interface ProfileImageProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const sizeClasses = {
  sm: 'w-12 h-12',
  md: 'w-20 h-20',
  lg: 'w-32 h-32',
  xl: 'w-48 h-48',
};

export default function ProfileImage({ size = 'md', className = '' }: ProfileImageProps) {
  return (
    <div className={`${sizeClasses[size]} ${className}`}>
      <img
        src="/me.jpg"
        alt="Mauricio Quirós"
        className="w-full h-full rounded-full object-cover border-2 border-primary/30 hover:border-primary transition-all duration-300"
      />
    </div>
  );
}
