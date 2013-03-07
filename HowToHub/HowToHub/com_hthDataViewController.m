//
//  com_hthDataViewController.m
//  HowToHub
//
//  Created by Dean Stallworth on 3/7/13.
//  Copyright (c) 2013 Dean Stallworth. All rights reserved.
//

#import "com_hthDataViewController.h"

@interface com_hthDataViewController ()

@end

@implementation com_hthDataViewController

- (void)viewDidLoad
{
    [super viewDidLoad];
	// Do any additional setup after loading the view, typically from a nib.
}

- (void)didReceiveMemoryWarning
{
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

- (void)viewWillAppear:(BOOL)animated
{
    [super viewWillAppear:animated];
    self.dataLabel.text = [self.dataObject description];
}

@end
