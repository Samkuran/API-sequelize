import Category from '../../models/category.js';

export async function listAll() {
    const categories = await Category.findAll({
      where: {
        status: [0, 1]
      }
    });
    return categories;
  }
  
  export async function listOne(id) {
    const category = await Category.findByPk(id);
    if (!category) throw new Error('Category not found');
    return category;
  }
  
  export async function create(data) {
    const category = await Category.create({
      nome: data.nome
    });
    return category;
  }
  
  export async function edit(id, data) {
    const category = await Category.findByPk(id);
    if (!category) throw new Error('Category not found');
    
    await category.update(data);
    return category;
  }
  
  export async function destroy(id) {
    const category = await Category.findByPk(id);
    if (!category) throw new Error('Category not found');
    
    await category.destroy();
  }