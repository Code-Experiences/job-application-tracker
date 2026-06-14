export async function get_application(prisma, appid, uid) {
  return await prisma.Application.findUnique({
    where: { 
      application_id: appid, 
      user_id: uid 
    },
    include: {
      company: true
    }
  });
}

export async function get_user_applications(prisma, uid) {
  return await prisma.Application.findMany({
    where: {
      user_id: uid
    },
    select: {
      application_id: true,
      role: true,
      company: {
        select: { name: true }
      }
    }
  })
}