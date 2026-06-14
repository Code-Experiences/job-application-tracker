export async function get_company(prisma, cid) {
  return await prisma.Company.findUnique({
    where: { company_id: cid }
  });
}

export async function get_companies(prisma) {
  return await prisma.Company.findMany({
    select: {
      company_id: true,
    }
  })
}

export async function search_companies(prisma, query) {
  return await prisma.Company.findMany({
    where: {
      name: {
        startsWith: query
      }
    },
    select: {
      company_id: true,
      name: true
    }
  })
}