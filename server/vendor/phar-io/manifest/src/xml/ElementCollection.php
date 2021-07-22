<?php declare(strict_types = 1);
/*
 * This file is part of PharIo\Manifest.
 *
 * (c) Arne Blankerts <arne@blankerts.de>, Sebastian Heuer <sebastian@phpeople.de>, Sebastian Bergmann <sebastian@phpunit.de>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
namespace PharIo\Manifest;

use DOMElement;
use DOMNodeList;

abstract class ElementCollection implements \Iterator {
    /** @var DOMElement[] */
    private $nodes = [];

    /** @var int */
    private $position;

    public function __construct(DOMNodeList $nodeList) {
        $this->position = 0;
        $this->importNodes($nodeList);
    }

<<<<<<< HEAD
    #[\ReturnTypeWillChange]
=======
>>>>>>> 3838afb4629d7fb0bf8ee8c43ddc65312fda9c52
    abstract public function current();

    public function next(): void {
        $this->position++;
    }

<<<<<<< HEAD
    public function key(): int {
        return $this->position;
    }

    public function valid(): bool {
=======
    public function key() {
        return $this->position;
    }

    public function valid() {
>>>>>>> 3838afb4629d7fb0bf8ee8c43ddc65312fda9c52
        return $this->position < \count($this->nodes);
    }

    public function rewind(): void {
        $this->position = 0;
    }

    protected function getCurrentElement(): DOMElement {
        return $this->nodes[$this->position];
    }

    private function importNodes(DOMNodeList $nodeList): void {
        foreach ($nodeList as $node) {
            if (!$node instanceof DOMElement) {
                throw new ElementCollectionException(
                    \sprintf('\DOMElement expected, got \%s', \get_class($node))
                );
            }

            $this->nodes[] = $node;
        }
    }
}
