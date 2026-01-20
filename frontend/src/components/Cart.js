import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useCart } from '../contexts/CartContext';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from './ui/sheet';
import { Button } from './ui/button';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { toast } from 'sonner';

const Cart = () => {
  const { isArabic } = useLanguage();
  const { cartItems, removeFromCart, updateQuantity, getCartTotal, isCartOpen, setIsCartOpen, clearCart } = useCart();

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      toast.error(isArabic ? 'السلة فارغة' : 'Cart is empty');
      return;
    }
    // Mock checkout
    toast.success(isArabic ? 'تم إرسال طلبك بنجاح!' : 'Order placed successfully!');
    clearCart();
    setIsCartOpen(false);
  };

  return (
    <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
      <SheetContent 
        side={isArabic ? 'left' : 'right'} 
        className="w-full sm:max-w-lg bg-charcoal border-l border-golden/20"
      >
        <SheetHeader dir={isArabic ? 'rtl' : 'ltr'}>
          <SheetTitle className="text-2xl font-bold text-cream flex items-center gap-2">
            <ShoppingBag className="h-6 w-6 text-golden" />
            {isArabic ? 'سلة التسوق' : 'Shopping Cart'}
          </SheetTitle>
        </SheetHeader>

        <div className="flex flex-col h-full pt-6" dir={isArabic ? 'rtl' : 'ltr'}>
          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto pr-2">
            {cartItems.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="h-16 w-16 text-golden/30 mb-4" />
                <p className="text-cream/60 text-lg">
                  {isArabic ? 'السلة فارغة' : 'Your cart is empty'}
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {cartItems.map(item => (
                  <div
                    key={item.id}
                    className="flex gap-4 bg-charcoal-light p-4 rounded-lg border border-golden/20"
                  >
                    {/* Image */}
                    <img
                      src={item.image}
                      alt={isArabic ? item.nameAr : item.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />

                    {/* Details */}
                    <div className="flex-1">
                      <h3 className="font-bold text-cream mb-1">
                        {isArabic ? item.nameAr : item.name}
                      </h3>
                      <p className="text-golden font-bold mb-2">
                        {item.price.toFixed(2)} {isArabic ? 'ر.س' : 'SAR'}
                      </p>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="h-8 w-8 p-0 border-golden/30 text-golden hover:bg-golden hover:text-charcoal"
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="text-cream font-bold w-8 text-center">{item.quantity}</span>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="h-8 w-8 p-0 border-golden/30 text-golden hover:bg-golden hover:text-charcoal"
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>

                    {/* Remove Button */}
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-400 hover:bg-red-500/10"
                    >
                      <X className="h-5 w-5" />
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Cart Footer */}
          {cartItems.length > 0 && (
            <div className="border-t border-golden/20 pt-6 mt-6 space-y-4">
              {/* Total */}
              <div className="flex justify-between items-center text-xl font-bold">
                <span className="text-cream">
                  {isArabic ? 'الإجمالي' : 'Total'}
                </span>
                <span className="text-golden">
                  {getCartTotal().toFixed(2)} {isArabic ? 'ر.س' : 'SAR'}
                </span>
              </div>

              {/* Checkout Button */}
              <Button
                onClick={handleCheckout}
                className="w-full bg-golden hover:bg-golden/90 text-charcoal font-bold py-6 text-lg transition-all duration-300 hover:scale-105"
              >
                {isArabic ? 'إتمام الطلب' : 'Checkout'}
              </Button>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Cart;