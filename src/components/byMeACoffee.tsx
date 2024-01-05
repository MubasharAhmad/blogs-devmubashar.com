import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BuyMeACoffee = () => {
    return (
        <div>
            <Link href="https://www.buymeacoffee.com/devmubashar" target='_blank'>
                <Image priority src='/buymecoffee.png' alt='buymecoffee' width={1090} height={306} className='w-auto h-12' />
            </Link>
        </div>
    )
}

export default BuyMeACoffee
