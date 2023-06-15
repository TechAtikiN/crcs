import { PrismaClient, Prisma } from '@prisma/client'
import { societies } from '../db'

const prisma = new PrismaClient()

async function main() {
  console.log('start seeding...')

  for (const s of societies) {
    const society = await prisma.society.create({
      data: s
    })
    console.log(`created society: ${society.name}`)
  }
  console.log('seeding finished.')
}

main()
  .then(async () => {
  await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect() 
    process.exit(1)
  })

