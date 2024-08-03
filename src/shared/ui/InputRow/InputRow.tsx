import { Control, Controller, FieldError, FieldValues, RegisterOptions } from 'react-hook-form'
import { Flex, InputProps } from 'antd'
import { error } from 'console'
import { Input } from '../Input/Input'
import cls from './InputRow.module.scss'
import { Text } from '../Text/Text'


interface InputRowProps extends InputProps {
    className?: string
    control: any
    name: string
    rules?: RegisterOptions
    placeholder?: string
    error?: FieldError
	label?: string
	hasPreffix?: boolean
	isError?: boolean
	defaultValue?: any
}

export const InputRow: React.FC<InputRowProps> = (props) => {
	const {
		className,
		defaultValue,
		control,
		name,
		rules,
		placeholder,
		error,
		label,
		hasPreffix = true,
		...otherProps
	} = props

	return (
		<Flex gap={5} vertical>
			{
				label && (
					<label htmlFor={name} className={cls.label}>
						{label}
					</label>
				)
			}
			<Controller
				name={name}
				control={control}
				rules={rules}
				defaultValue={defaultValue}
				render={
					({ field }) => (
						<Input
							id={name}
							placeholder={placeholder}
							hasPreffix={hasPreffix}
							isError={!!error}
							{...otherProps}
							{...field}
						/>
					)
				}
			/>
			{
				error?.message && <Text className={cls.error}> {error?.message} </Text>
			}
		</Flex>
	)
}
