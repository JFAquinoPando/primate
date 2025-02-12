import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

(async () => {
  try {
    const user = await prisma.usuario.create({
      data: {
        email: 'fabricio@test.com.py',
        name: 'Fabricio',
      },
    });
    console.log('Usuario creado:', user);

    const users = await prisma.usuario.findMany();
    console.log('Usuarios en la BD:', users);

    const updatedUser = await prisma.usuario.update({
      where: { id: user.id },
      data: { name: 'José Fabricio', nickname: "JFAquinoPando" },
    });
    console.log('Usuario actualizado:', updatedUser);

    /* await prisma.usuario.delete({ where: { id: user.id } });
    console.log('Usuario eliminado'); */
  } catch (error) {
    console.error(error); // en caso de error mostrarmos 
  } finally {
    await prisma.$disconnect();
  }
})();

