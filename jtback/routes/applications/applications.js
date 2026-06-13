export async function get_application(prisma, appid, uid) {
  return await prisma.Application.findUnique({
    where: { application_id: appid, user_id: uid }
  });
}

export async function get_user_applications(prisma, uid) {
  return await prisma.Application.findMany({
    select: {
      application_id: true,
      role: true,
      company: {
        select: { name: true }
      }
    },
    where: {
      user_id: uid
    }
  })
}