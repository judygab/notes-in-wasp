export const getNotes = async (args, context) => {
    return context.entities.Note.findMany({})
  }