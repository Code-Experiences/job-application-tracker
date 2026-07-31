export async function login_user(prisma, email, pass) {
    return prisma.User.findFirst({
        where : { email: email, password: pass },
        select: { user_id: true, name: true }
    })
}