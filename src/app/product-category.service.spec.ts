import { TestBed } from '@angular/core/testing';

import { ProductCategoryService } from './product-category.service';

describe('ProductCategoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductCategoryService = TestBed.get(ProductCategoryService);
    expect(service).toBeTruthy();
  });
});
