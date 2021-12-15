import React from 'react'
import { TmCatalog } from '.'

export const mockData = {
  title: 'Catalog',
  mlBreadcrumbProps: {
    links: [{ label: 'Beeshop', disabled: true }],
  },
  mlSelectedFiltersProps: {
    filters: [
      { category: 'Category', name: 'Sneakers', hideCategory: true },
      { category: 'Color', name: 'Red' },
      { category: 'Size', name: '8' },
      { category: 'Material', name: 'Leather' },
    ],
    removeFilterHandler: () => true,
  },
  orSearchFiltersProps: {
    categories: [
      {
        category: 'Category',
        filters: [
          {
            category: 'Category',
            name: 'Boots',
          },
          {
            category: 'Category',
            name: 'Pantoufles',
          },
          {
            category: 'Category',
            name: 'Dress shoes',
          },
          {
            category: 'Category',
            name: 'Sneakers',
          },
          {
            category: 'Category',
            name: 'Sandals',
          },
          {
            category: 'Category',
            name: 'Accessories',
          },
        ],
      },
      {
        category: 'Size',
        filters: [
          {
            category: 'Size',
            name: '4-4.5',
          },
          {
            category: 'Size',
            name: '5',
          },
          {
            category: 'Size',
            name: '5.5',
          },
          {
            category: 'Size',
            name: '6',
          },
          {
            category: 'Size',
            name: '6.5',
          },
          {
            category: 'Size',
            name: '7',
          },
          {
            category: 'Size',
            name: '7.5',
          },
          {
            category: 'Size',
            name: '8',
          },
          {
            category: 'Size',
            name: '8.5',
          },
          {
            category: 'Size',
            name: '9',
          },
          {
            category: 'Size',
            name: '9.5',
          },
          {
            category: 'Size',
            name: '10',
          },
          {
            category: 'Size',
            name: '10.5',
          },
          {
            category: 'Size',
            name: '11',
          },
          {
            category: 'Size',
            name: '11.5',
          },
          {
            category: 'Size',
            name: '12',
          },
          {
            category: 'Size',
            name: '12.5',
          },
          {
            category: 'Size',
            name: '13',
          },
          {
            category: 'Size',
            name: '13.5',
          },
          {
            category: 'Size',
            name: '14',
          },
          {
            category: 'Size',
            name: '14.5',
          },
          {
            category: 'Size',
            name: '15',
          },
          {
            category: 'Size',
            name: '15.5',
          },
          {
            category: 'Size',
            name: '16',
          },
        ],
      },
      {
        category: 'Color',
        filters: [
          {
            category: 'Color',
            name: 'Black',
            variant: '#3B3B3B',
          },
          {
            category: 'Color',
            name: 'Silver',
            variant: '#979797',
          },
          {
            category: 'Color',
            name: 'White',
            variant: '#FFFFFF',
          },
          {
            category: 'Color',
            name: 'Brown',
            variant: '#774430',
          },
          {
            category: 'Color',
            name: 'Green',
            variant: '#326518',
          },
          {
            category: 'Color',
            name: 'Blue',
            variant: '#245196',
          },
          {
            category: 'Color',
            name: 'Purple',
            variant: '#5C4F9F',
          },
          {
            category: 'Color',
            name: 'Red',
            variant: '#D01E1E',
          },
          {
            category: 'Color',
            name: 'Pink',
            variant: '#F4A3E7',
          },
          {
            category: 'Color',
            name: 'Yellow',
            variant: '#FECB4F',
          },
          {
            category: 'Color',
            name: 'Gold',
            variant: '#D0B889',
          },
          {
            category: 'Color',
            name: 'Orange',
            variant: '#FE834F',
          },
        ],
      },
    ],
    addFilterHandler: () => true,
    removeFilterHandler: () => true,
    selectedFilters: [
      { category: 'Category', name: 'Sneakers', hideCategory: true },
      { category: 'Color', name: 'Red' },
      { category: 'Size', name: '8' },
      { category: 'Material', name: 'Leather' },
    ],
  },
}

export const TmCatalogPage = () => {
  return <TmCatalog {...mockData} />
}
