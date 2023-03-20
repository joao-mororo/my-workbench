import { AiFillHome, AiFillCalculator } from 'react-icons/ai'
import { SiOpenai } from 'react-icons/si'
import { IoMdCheckbox } from 'react-icons/io'
import { CgNotes } from 'react-icons/cg'
import { MdStickyNote2 } from 'react-icons/md'

export const navItems = [
    {
        icon: <AiFillHome />,
        display: 'Início',
        to: '/',
    },
    {
        icon: <AiFillCalculator />,
        display: 'Calculadora',
        to: '/calculator'
    },
    {
        icon: <SiOpenai />,
        display: 'ChatGPT',
        to: '/chatgpt'
    },
    {
        icon: <CgNotes />,
        display: 'Bloco de notas',
        to: '/notepad'
    },
    {
        icon: <IoMdCheckbox />,
        display: 'To-Do',
        to: '/todo'
    },
    {
        icon: <MdStickyNote2 />,
        display: 'Notes',
        to: '/notes'
    },
]