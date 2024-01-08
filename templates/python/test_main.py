import unittest

from main import *


class Test(unittest.TestCase):
    def test_p1_input(self):
        res = p1()
        self.assertEqual(res, 0)

    def test_p2_input(self):
        res = p2()
        self.assertEqual(res, 0)


if __name__ == '__main__':
    unittest.main()
