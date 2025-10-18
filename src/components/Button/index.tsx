import { TouchableOpacity, TouchableOpacityProps, Text } from 'react-native'
import React from 'react'
import { styles } from '@/components/Button/style'

type Props = TouchableOpacityProps & {
    title: string
}

export function Button({ title, ...rest }: Props) {
    return (
        <TouchableOpacity style={styles.container} activeOpacity={0.8} {...rest}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}