import { TestBed } from '@angular/core/testing';

import { BreadcrumbResolver } from './breadcrumb.resolver';

describe('BreadcrumbResolver', () => {
  let resolver: BreadcrumbResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(BreadcrumbResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
