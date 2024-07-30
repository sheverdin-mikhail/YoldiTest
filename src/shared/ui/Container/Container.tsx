import clsx from 'clsx';
import cls from './Container.module.scss';
import { ReactElement } from 'react';

interface ContainerProps {
    className?: string;
    children: ReactElement;
}

export const Container: React.FC<ContainerProps> = (props) => {
    const { className, children } = props;

    return (
        <div className={clsx(cls.container, {}, [className])}>
            {children}
        </div>
    );
}