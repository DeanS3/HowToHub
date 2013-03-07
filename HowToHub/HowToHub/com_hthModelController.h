//
//  com_hthModelController.h
//  HowToHub
//
//  Created by Dean Stallworth on 3/7/13.
//  Copyright (c) 2013 Dean Stallworth. All rights reserved.
//

#import <UIKit/UIKit.h>

@class com_hthDataViewController;

@interface com_hthModelController : NSObject <UIPageViewControllerDataSource>

- (com_hthDataViewController *)viewControllerAtIndex:(NSUInteger)index storyboard:(UIStoryboard *)storyboard;
- (NSUInteger)indexOfViewController:(com_hthDataViewController *)viewController;

@end
