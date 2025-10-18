import React from 'react'
import { View, Image, TouchableOpacity, Text } from 'react-native'

import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
import { Filter } from '@/components/Filter'
import { Item } from '@/components/Item'

import { styles } from './style'
import { FilterStatus } from '@/types/FilterStatus'

const FILTER_STATUS: FilterStatus[] = [FilterStatus.PENDING, FilterStatus.DONE]

export default function Home() {
    return (
        <View style={styles.container}>
            <Image source={require('@/assets/logo.png')} style={styles.logo} />
            <View style={styles.form}>
                <Input placeholder="O que você precisa comprar?" />
                <Button title="Adicionar" activeOpacity={0.9} />
            </View>

            <View style={styles.content}>
                <View style={styles.header}>
                    {
                        FILTER_STATUS.map((status) => (
                            <Filter key={status} status={status} isActive />
                        ))
                    }

                    <TouchableOpacity style={styles.clearButton}>
                        <Text style={styles.clearText}>Limpar</Text>
                    </TouchableOpacity>
                </View>

                {
                    Array.from({ length: 100 }).map((value, index) => {
                        console.log(index)
                        return (
                            <Item data={{ status: FilterStatus.DONE, descrition: "Café" }}
                                onStatus={() => console.log("mudar status")}
                                onRemove={() => console.log("remover")}
                            />)
                    })
                }


            </View>
        </View>
    )
}