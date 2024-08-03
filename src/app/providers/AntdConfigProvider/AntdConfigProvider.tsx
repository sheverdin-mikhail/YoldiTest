import { Button, ConfigProvider, Space } from 'antd'
import React, { ReactNode } from 'react'


interface AntdConfigProviderProps {
    children: ReactNode;
}

export const AntdConfigProvider: React.FC<AntdConfigProviderProps> = ({ children }) => (
	<ConfigProvider
		theme={
			{
				components: {
					Button: {
						colorPrimary: '#00b96b',
					},
					Input: {
						activeBorderColor: 'var(--gray-color)',
						hoverBorderColor: 'var(--gray-color)',
						colorBorder: 'var(--strokes-primary-color)',
						borderRadius: 5,
						paddingBlock: 12,
						paddingInline: 20,
						fontFamily: 'var(--font-family-main)',
						fontSize: 16,
						inputFontSize: 16,
						colorError: 'var(--error-color)',
					},
				},
			}
		}
	>
		{children}
	</ConfigProvider>
)
