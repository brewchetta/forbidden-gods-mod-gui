import CreateContextWrapper from './_useContextState'

const [useModContext, ModContextProvider] = CreateContextWrapper({name: '', events: []}, "modData")

export {useModContext, ModContextProvider}
