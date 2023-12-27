import unittest

from main import *


class Test(unittest.TestCase):

  def test_p1_test(self):
    with open("test.txt", 'r') as file:
      input = file.read()
      res = p1(input)
      self.assertEqual(res, 42)

  def test_p1_input(self):
    with open("input.txt", 'r') as file:
      input = file.read()
      res = p1(input)
      self.assertEqual(res, 42)

  def test_p2_test(self):
    with open("test.txt", 'r') as file:
      input = file.read()
      res = p2(input)
      self.assertEqual(res, 42)

  def test_p2_input(self):
    with open("input.txt", 'r') as file:
      input = file.read()
      res = p2(input)
      self.assertEqual(res, 42)
